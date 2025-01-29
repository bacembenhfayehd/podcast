"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { voiceDetails } from "@/constants"
import { useState } from "react"
import GeneratePodcast from "@/components/GeneratePodcast"
import GenerateThumbnail from "@/components/GenerateThumbnail"
import { Loader } from "lucide-react"
import { Id } from "@/convex/_generated/dataModel"

const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2)
})


const voiceCategories = ['alloy' ,'shimmer','nova','echo','fable','onyx']

const CreatePodcast = () => {

  const [imagePrompt,setImagePrompt]=useState('')
  const[imageUrl,setImageUrl]=useState('')
  const [imageStorageId,setImageStorageId]=useState<Id<"_storage">|null>(null)
  const [audioUrl,setAudioUrl]=useState('')
  const [audioStorageId,setAudioStorageId]=useState<Id<"_storage"> | null >(null)
  const [audiorDuration,setAudioDuration]=useState(0)
  const [voicePrompt,setVoicePrompt]=useState('')
  const [voiceType,setVoiceType] = useState<string | null>(null)
  const [isubmitting,setIssubmitting] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  // ...

  return (
    <section className="flex flex-col mt-10">

<h1 className='text-20 font-bold text-white-1'>Create podcast</h1>

<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-12 w-full">
        <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
        <FormField
          control={form.control}
          name="podcastTitle"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Podcast Title</FormLabel>
              <FormControl>
                <Input className="input-class focus-visible:ring-orange-1" placeholder="JSM Pro podcast" {...field} />
              </FormControl>
              <FormMessage className="text-white-1" />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2.5">
          <Label className="text-16 text-white-1 font-bold">
            Select AI voice
          </Label>
          <Select onValueChange={(value) => setVoiceType(value)}>
  <SelectTrigger className={cn('text-16 w-full border-none bg-black-1 text-gray-1')}>
    <SelectValue placeholder="Select AI Voice" className="placeholder:text-gray-1" />
  </SelectTrigger>
  <SelectContent className="text-16 font-bold border-none bg-black-1 text-white-1 focus:ring-orange-1">
    {voiceCategories.map((category) => (
      <SelectItem key={category} value={category} className="capitalize focus:bg-orange-1">
        {category}
      </SelectItem>
    ))}
  
  </SelectContent>
  {voiceType && (
                  <audio 
                    src={`/${voiceType}.mp3`}
                    autoPlay
                    className="hidden"
                  />
                )}
</Select>
 </div>
 <FormField
          control={form.control}
          name="podcastDescription"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
              <FormControl>
                <Textarea className="input-class focus-visible:ring-orange-1" placeholder="Write a short podcast description" {...field} />
              </FormControl>
              <FormMessage className="text-white-1" />
            </FormItem>
          )}
        />
        </div>
        <div className="flex flex-col pt-10">
          <GeneratePodcast setAudioStorageId={setAudioStorageId}
           setAudio={setAudioUrl}
            voiceType={voiceType}
            audio={audioUrl}
            voicePrompt={voicePrompt}
            setAudioDuration={setAudioDuration}
            setVoicePrompt={setVoicePrompt}/>
          <GenerateThumbnail/>
          <div className="w-full mt-10">
            <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
              {isubmitting ? (
                <>
                <Loader size={20} className=" ml-2  animate-spin"/>
                Submitting...
                </>
                
              ):(
                'Submit & Publish Podcast'
              )}
            </Button>
          </div>

        </div>
      
      </form>
    </Form>

    </section>
    
  )
}

export default CreatePodcast;




//<h1 className='text-20 font-bold text-white-1'>Create podcast</h1>
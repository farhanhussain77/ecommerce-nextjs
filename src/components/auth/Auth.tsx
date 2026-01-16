"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import { toast } from "sonner"
import { useEffect } from "react"

export default function Auth({ error }: { error?: string }) {
  useEffect(() => {
    if (error) {
      const errorMessages: { [key: string]: string } = {
        missing_code: "Missing verification code. Please try again.",
        verification_failed: "Email verification failed. Please try again.",
      }
      toast.error(errorMessages[error] || decodeURIComponent(error))
    }
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account or create a new one
          </p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="mt-6">
            <SignInForm />
          </TabsContent>

          <TabsContent value="signup" className="mt-6">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


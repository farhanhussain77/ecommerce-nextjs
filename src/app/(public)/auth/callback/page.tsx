import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

async function handleCallback(searchParams: { [key: string]: string | string[] | undefined }) {
  const code = searchParams.code
  const next = searchParams.next || '/'

  if (!code || typeof code !== 'string') {
    redirect('/auth?error=missing_code')
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      redirect(`/auth?error=${encodeURIComponent(error.message)}`)
    }

    // Success - redirect to the next page or home
    redirect(typeof next === 'string' ? next : '/')
  } catch (error: any) {
    // Re-throw redirect errors - they are expected and should not be caught
    if (error?.digest?.startsWith('NEXT_REDIRECT')) {
      throw error
    }
    
    // Only handle actual errors, not redirects
    console.error('Error in auth callback:', error)
    redirect('/auth?error=verification_failed')
  }
}

export default async function AuthCallbackPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  await handleCallback(searchParams)

  return (
    <Suspense fallback={<div>Verifying your email...</div>}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Verifying your email...</h1>
          <p className="text-muted-foreground">Please wait while we confirm your account.</p>
        </div>
      </div>
    </Suspense>
  )
}


'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type AuthActionResult = {
  success: boolean
  error?: string
  message?: string
}

export async function signUpAction(
  email: string,
  password: string,
  name: string,
  redirectUrl?: string
): Promise<AuthActionResult> {
  try {
    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
        emailRedirectTo: redirectUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
      },
    })

    if (error) {
      return {
        success: false,
        error: error.message || 'Failed to create account. Please try again.',
      }
    }

    return {
      success: true,
      message: 'Account created successfully! Please check your email to confirm your account.',
    }
  } catch (error) {
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    }
  }
}

export async function signInAction(
  email: string,
  password: string
): Promise<AuthActionResult> {
  try {
    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return {
        success: false,
        error: error.message || 'Invalid credentials. Please try again.',
      }
    }

    // Revalidate the auth state
    revalidatePath('/', 'layout')
    
    return {
      success: true,
      message: 'Signed in successfully!',
    }
  } catch (error) {
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    }
  }
}


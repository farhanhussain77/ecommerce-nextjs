import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'

/**
 * DELETE /api/users/delete
 * Permanently deletes a user from auth.users
 * 
 * Requires SUPABASE_SERVICE_ROLE_KEY environment variable
 * 
 * Body: { userId: string }
 */
export async function GET(request: NextRequest) {
  try {
    const userId = "9e93b3a3-1b9f-4624-8932-d1d4c650467f";

    // Create admin client with service role key
    const adminClient = createAdminClient()

    // Delete the user from auth.users
    const { error, data } = await adminClient.auth.admin.deleteUser(userId)

    if (error) {
      console.error('Error deleting user:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to delete user' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'User deleted successfully',
        userId 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error in delete user endpoint:', error)
    
    if (error instanceof Error) {
      // Handle missing environment variable
      if (error.message.includes('SUPABASE_SERVICE_ROLE_KEY')) {
        return NextResponse.json(
          { error: 'Server configuration error: Missing service role key' },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: error.message || 'Internal server error' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


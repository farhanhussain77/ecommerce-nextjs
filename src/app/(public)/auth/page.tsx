import Auth from "@/components/auth/Auth"

export default function AuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const error = searchParams.error
  return <Auth error={typeof error === 'string' ? error : undefined} />
}


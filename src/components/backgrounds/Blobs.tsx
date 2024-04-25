import { cn } from "@/lib/utils";

type BackgroundBlobsProps = {
  children?: React.ReactNode;
}

export const BackgroundBlobs = ({ children }: BackgroundBlobsProps) => {

  return (
    <div className="relative w-full max-w-lg -z-50">
      <Blob className="top-14 left-16 bg-purple-300 animate-blob" />
      <Blob className="top-24 left-64 bg-yellow-300 animate-blob animation-delay-2000" />
      <Blob className="top-44 left-36 bg-pink-300 animate-blob animation-delay-4000" />
      {children}


    </div>
  )
}



type BlobProps = { className?: string }

const Blob = (props: BlobProps) => {
  return (
    <div className={cn(
      "absolute w-72 h-72 rounded-full mix-blend-multiply opacity-30 -z-40 filter blur-3xl",
      props.className
    )} />
  )
}
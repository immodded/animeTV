import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('@/app/ui/videoplayer.js'), {
  ssr: false, 
});
export default function Page({ searchParams }) {
    const { url = '' } = searchParams;

    if (!url) {
        notFound(); // Redirect to the 404 page if the URL is not found
    }

    return (
        <div>
            <VideoPlayer url={url} />
        </div>
    );
}

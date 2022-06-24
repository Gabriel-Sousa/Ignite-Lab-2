import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

export function Event() {
  const { slug_url } = useParams<{ slug_url: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug_url ? (
          <Video lessonSlug={slug_url} />
        ) : (
          <div className="flex-1" />
        )}
        <Sidebar />
      </main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaqPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <h2 className="text-xl font-bold">Why another subtitle editor?</h2>
      <p className="my-4">
        Yes I know, there are many subtitle editors out there. But I found that
        none of them is ideal for me so I built this one. These are the ones
        they I have tried and what I think are missing in them:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <a
            href="https://www.happyscribe.com/subtitle-tools/online-subtitle-editor/free"
            className="hover:underline text-blue-600 hover:text-blue-800"
          >
            Happy Scribe
          </a>{" "}
          offers a free online subtitle editor. No account registration is
          required. Editing subtitles and previewing with the video is very
          easy. It is the closest to what I need. Unfortunately, it's missing
          waveform visualization, which is deal breaker for me. It is not open
          sourced either and we can't customize it.
        </li>
        <li>
          <a
            href="https://www.nikse.dk/subtitleedit"
            className="hover:underline text-blue-600 hover:text-blue-800"
          >
            Subtitle Edit
          </a>{" "}
          is a great option and the closest one to what I need. It supports
          waveform visualization, easy preview and editing, and even AI
          transcriptions. But it is a desktop software which requires
          installation, and it doesn't support Mac. I have to use a Windows or
          Linux device to edit subtitles.
        </li>
        <li>
          <a
            href="https://aegisub.org/"
            className="hover:underline text-blue-600 hover:text-blue-800"
          >
            Aegisub
          </a>{" "}
          is similar to Subtitle Edit. It is a desktop software suitable for
          more complex subtitle editing. Also I found waveform visualizer not
          very intuitive. (Btw these desktop software have 1990s-style UI which
          really demoralizes me)
        </li>
        <li>
          Other options such as{" "}
          <a
            href="https://opensubtitleed.sourceforge.net/"
            className="hover:underline text-blue-600 hover:text-blue-800"
          >
            Open Subtitle Editor
          </a>{" "}
          or{" "}
          <a
            href="https://www.movavi.com/"
            className="hover:underline text-blue-600 hover:text-blue-800"
          >
            Movavi
          </a>{" "}
          are either too complex and feature-bloated, or are not free.
        </li>
      </ul>
      <h2 className="text-xl font-bold my-4">
        Will you actively maintain this app?
      </h2>
      <p>
        This app is open sourced on github{" "}
        <a
          href="https://github.com/laubonghaudoi/subtitle-editor"
          className="hover:underline text-blue-600 hover:text-blue-800"
        >
          laubonghaudoi/subtitle-editor
        </a>{" "}
        I will check issues and accept PRs regularly, but I am quite busy these
        days so I may not have time to develop new features. This is a community
        project and your contributions are always welcomed!
      </p>
      <h2 className="text-xl font-bold my-4">Have feedback?</h2>
      <Button asChild variant="secondary" className="my-8">
        <Link href="/">Back to Editor</Link>
      </Button>
    </div>
  );
}

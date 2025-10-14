import { client } from "./sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export function fechImage(img?: string): string {

    const { projectId, dataset } = client.config();

    const urlFor = (source: SanityImageSource) =>
        projectId && dataset
            ? ImageUrlBuilder({ projectId, dataset }).image(source)
            : null;

    if (!img) {
        return "/media/cover.png";
    }
    const postImageUrl = urlFor(img)?.width(550).height(310).url();

    return postImageUrl ?? "/media/cover.png";
}


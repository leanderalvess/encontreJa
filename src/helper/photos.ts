/**
 * Works with personal hotos.
 */
export const getPhoto = async (urlPhoto?: string): Promise<string> => {
    const defaultAvatar = "/src/assets/default-avatar.png"
    if (!urlPhoto || urlPhoto === null) {
        return defaultAvatar;
    }

    try {
        const response = await fetch(urlPhoto, { method: "HEAD" });

        const contentType = response.headers.get("Content-Type") || "";

        if (response.ok && contentType.startsWith("image/")) {
            return urlPhoto;
        } else {
            return defaultAvatar;
        }
    } catch (error) {
        console.error("Error fetching photo:", error);
        return defaultAvatar;
    }
};

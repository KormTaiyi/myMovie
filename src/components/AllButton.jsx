import { LuBookmarkPlus, LuBookmarkCheck } from "react-icons/lu";
import { useState } from "react";

export function SavedMovie() {
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <main>
            <button
                className="cursor-pointer text-xl text-gray-500 absolute bottom-2 right-3"
                onClick={() => setIsBookmarked(!isBookmarked)}
                aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
            >
                {isBookmarked ? <LuBookmarkCheck /> : <LuBookmarkPlus />}
            </button>
        </main>
    );
}
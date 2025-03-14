import React, { useState } from "react";
import { db, storage } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Post.css";

const Post = () => {
    const [newPost, setNewPost] = useState("");
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const addPost = async () => {
        if (newPost.trim() === "" && !image) return;

        setUploading(true);
        let imageUrl = null;

        if (image) {
            const storageRef = ref(storage, `posts/${image.name}-${Date.now()}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            await new Promise((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    null,
                    (error) => reject(error),
                    async () => {
                        imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve();
                    }
                );
            });
        }

        await addDoc(collection(db, "posts"), {
            text: newPost,
            imageUrl,
            createdAt: Timestamp.now()
        });

        setNewPost("");
        setImage(null);
        setUploading(false);
    };

    return (
        // <div className="post-container">
        //     <h2>📝 Create a Post</h2>
        //     <textarea
        //         className="post-input"
        //         rows="3"
        //         placeholder="Write something..."
        //         value={newPost}
        //         onChange={(e) => setNewPost(e.target.value)}
        //     />

        //     <input type="file" accept="image/*" onChange={handleImageChange} className="post-file-input" />

        //     <button className="post-button" onClick={addPost} disabled={uploading}>
        //         {uploading ? "Uploading..." : "Post"}
        //     </button>
        // </div>
        <h1>Page is under development...</h1>
    );
};

export default Post;

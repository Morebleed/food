"use client"

import { ChangeEvent, useState } from "react";

const LoginPage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = Array.from(event.target.files as FileList)[0];

        setSelectedFile(file);
    };

    const handleSubmit = () => {
        const form = new FormData();

        if ()

        form.append("upload_preset", "Food-Delivery");
        form.append("upload, selectedFile")
    };

    return (
        <form>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default LoginPage;
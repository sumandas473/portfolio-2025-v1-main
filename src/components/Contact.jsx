"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { Cover } from "./ui/cover";


export function Contact() {
    const [loadingMessage, setLoadingMessage] = useState({
        loading: false,
        message: "",
        success: false,
    })
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
                setLoadingMessage({
                    loading: false,
                    message: "Please fill all the fields!",
                    success: false,
                })
                return;
            }
            setLoadingMessage({
                loading: true,
                message: "",
                success: false,
            });

            const payload = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                message: formData.message,
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if(!response.ok) {
                throw new Error("Network response was not ok");
            }
            
            const res = await response.json();

            if(res?.message){
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: ""
                });
                setLoadingMessage({
                    loading: false,
                    message: res?.message,
                    success: true,
                });
            }
            else{
                setLoadingMessage({
                    loading: false,
                    message: "Failed to send message. Please try again later!",
                    success: false,
                })
            }

        } catch (error) {
            setLoadingMessage({
                    loading: false,
                    message: "Failed to send message. Please try again later!",
                    success: false,
                })

                console.log("Contact form error:", error);
        }

    };
    return (
        <div id="contact"
            className="shadow-input bg-[#11121617] z-[20] mx-auto w-full max-w-[800px] backdrop-blur-[18px] rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black xl:mt-[60rem]">
            <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                Do You Have A Project, <Cover>Let's Discuss</Cover>
            </h2>
            {loadingMessage?.message && <p className={`mt-[20px] text-[0.9rem] ${loadingMessage?.success ? "text-green-400":"text-red-400"}`}>*{loadingMessage?.message}</p>}
            <form className="my-8" onSubmit={handleSubmit}>
                <div
                    className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Enter Your Message</Label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="p-[10px] rounded-[4px] outline-none border-none resize-none h-[140px] bg-zinc-800 text-white" />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-blue-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit">
                    {!loadingMessage?.loading ? "Submit" : "Sending..."}
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span
                className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

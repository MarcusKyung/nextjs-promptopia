"use client"

import { useState } from 'react';
import {useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

export const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
      prompt: '',
      tag: '',
    });
  
    const createPrompt = async (e) => {
    
    }

    return (
    <Form 
    
    />
  )
}

export default CreatePrompt
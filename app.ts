type RequestType = {
  topicId: number;
  status?: 'published' | 'draft' | 'deleted';
}

type ResponseT = {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: 'published' | 'draft' | 'deleted'
}[]

async function getFaqs(req: RequestType): Promise<ResponseT> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data: ResponseT = await res.json();
  return data;
}
interface Testimonial {
  id: string;
  authorName: string;
  authorOccupation: string; 
  content: string;
  rating: number; 
  createdAt: string; 
}

interface GetTestimonialsResponse {
  testimonials: Testimonial[];
}

interface CreateTestimonialRequest {
  authorName: string;
  authorOccupation: string; 
  content: string;
  rating: number; 
}

interface CreateTestimonialResponse {
  testimonial: Testimonial;
}

declare module 'kingsukhguesthouse-api' {
  export function getTestimonials(): Promise<GetTestimonialsResponse>;
  export function createTestimonial(request: CreateTestimonialRequest): Promise<CreateTestimonialResponse>;
}

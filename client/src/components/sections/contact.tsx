import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter fat a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    form.reset();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need electrical services? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          <Card className="p-6">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">Business Location</h3>
              {business?.basic_info.city && (
                <p className="text-gray-600 mb-4">
                  Located in {business.basic_info.city}
                </p>
              )}
              <iframe
                className="w-full flex-1 rounded-lg border-2 border-gray-200"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  business?.basic_info.longitude || -86.5861
                }%2C${
                  business?.basic_info.latitude || 34.7304
                }%2C${
                  (business?.basic_info.longitude || -86.5861) + 0.01
                }%2C${
                  (business?.basic_info.latitude || 34.7304) + 0.01
                }&layer=mapnik&marker=${
                  business?.basic_info.latitude || 34.7304
                }%2C${
                  business?.basic_info.longitude || -86.5861
                }`}
                style={{ minHeight: "300px" }}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
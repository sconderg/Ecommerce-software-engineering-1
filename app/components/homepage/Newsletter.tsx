import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="bg-primary/10 rounded-lg p-8 text-center mb-12">
      <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-4">
        Stay updated with the latest deals and exclusive offers from ShopSmart.
        Subscribe now!
      </p>
      <div className="flex max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-grow"
        />
        <Button type="submit" className="ml-2">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;

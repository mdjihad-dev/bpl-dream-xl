
import NewsletterBG from '../../assets/Newsletter.png';

const Newsletter = () => {
    return (
      <div
        className="my-7 container mx-auto px-7 py-10 shadow-2xl bg-gradient-to-r from-blue-50 via-white to-orange-50"
        style={{
          backgroundImage: `url(${NewsletterBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <div className="">
            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p className="py-6">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div className="">
            <input type="email" placeholder="Inter your Email" />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Newsletter;
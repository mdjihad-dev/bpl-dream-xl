
import bannerMain from '../../assets/banner-main.png'
import bgShadow from '../../assets/bg-shadow.png'

const Hero = () => {
    return (
      <div
        className="hero container mx-auto my-4 bg-black text-white min-h-screen"
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content text-center ">
          <div className="space-y-1">
            <img src={bannerMain} alt="bannerMain image" className="mx-auto" />

            <h1 className="text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="py-6 font-semibold">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="btn btn-warning">Claim Free Credit</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;
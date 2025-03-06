const Agencybackg = () => {
    return (
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Legacy in Dental Care
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TOP DENT was established in 1998 by Late Mr. Manjeet Singh Sood, the director of
              “International Trading Corp of India.” By 2004, TOP DENT became fully functional and has
              been in business for over two decades. <br />
              Our founder, Late Mr. Manjeet Sood, started in this industry back in 1975 and contributed
              immensely to the dental trade in India. He pioneered importing dental products from various
              parts of the world, bringing advanced technology and high standards to Indian consumers.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              We at TOPDENT are now headed by a qualified medical professional,{" "}
              <span className="font-semibold text-indigo-700">Dr. Vishal Sood</span>, striving to carry on the legacy.
              <br />
              At TOP DENT, we believe in{" "}
              <span className="font-semibold">quality, reliability, ease of business, and competitive pricing.</span> 
              Our goal is to maintain customer confidence in our services.
            </p>
  
            {/* Product List */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">We Are the Sole Distributors of:</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>TDI USA Dental Light Cure (LED)</li>
                <li>TDI Scaler Unit</li>
                <li>Teeth Set (Japan and Turkey)</li>
              </ul>
            </div>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              We also partner with various small & big manufacturers, traders, and importers of dental
              materials, instruments, equipment, and tools, offering a vast catalogue of such items.
            </p>
          </div>
  
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/close-up-dentist-their-clinic_23-2149206233.jpg?t=st=1740116333~exp=1740119933~hmac=8c85fdca284b164fa1156f78c6c616fcd62f7b57f531c63a1a819071ac499872&w=360"
              alt="Dental Clinic"
              className="w-full md:w-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Agencybackg;
  
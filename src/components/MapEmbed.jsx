

const MapEmbed = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.750615083474!2d77.29210599999999!3d28.6372355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdf4ab5c60b%3A0x80e13131b0d181ee!2sTopdent!5e0!3m2!1sen!2sin!4v1742543609639!5m2!1sen!2sin"
        width="300"
        height="150"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

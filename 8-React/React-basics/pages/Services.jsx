import { AuthCreate } from "../store/auth";

export const Services =  () => {
  const { service } = AuthCreate();

  console.log(service);
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {service && service.length > 0 ? (
          service.map((curElem, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="/images/design.png" alt="designer" width="200" />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{curElem.provider}</p>
                  <p>{curElem.price}</p>
                </div>
                <h2>{curElem.service}</h2>
                <p>{curElem.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default Services;

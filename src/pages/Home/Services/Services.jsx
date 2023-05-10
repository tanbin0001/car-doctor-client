import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-">
            <div className="text-center">
                <h3 className="text-xl text-prime font-bold"> Services</h3>
                <h2 className="text-5xl"> Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit <br /> ullam autem illum commodi temporibus iste harum facilis nostrum aliquid doloremque.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
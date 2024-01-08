import React, { useState, useEffect } from 'react'
import '../../style/visitor.css'
import Card from '../Card'
import Loading from '../Loading'
import axios from 'axios';

const Visitor = ({isAdmin}) => {
    const [vehicle, setVehicle] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVehicles = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/vehicle', {
                params: {
                    name: '',
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setVehicle(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            setLoading(false);
        }
    }

        useEffect(() => {
            fetchVehicles();
        }, [])

    return (
        <>
            <div className='flex flex-col justify-center items-center gap-12'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-20 m-11 mt-0'>
                    <img src='vCar.svg' alt='Car Picture' className='w-[70vh] ' />
                    <div className='flex flex-col justify-center items-center gap-7'>
                        <p className='text-xl'>Planifiez votre voyage maintenant</p>
                        <h1 className='text-4xl text-center font-medium'>Économisez <span className='text-blueLogo'>GROS</span> sur notre location de voiture.</h1>
                        <p className='text-lg text-justify'>Bienvenue chez CarRentalManagement! Nous sommes ravis de vous accompagner dans la planification de votre
                            voyage. Profitez de notre large sélection de voitures de location, toutes soigneusement entretenues pour
                            vous assurer un voyage en toute tranquillité. Avec des tarifs compétitifs et des offres spéciales,
                            économisez davantage tout en explorant votre destination préférée. Réservez dès maintenant et vivez
                            l'expérience d'un voyage sans soucis avec notre service de location de voiture de confiance. Bon voyage
                            avec CarRentalManagement!
                        </p>
                    </div>
                </div>

                <div className='bg-gray-100 p-16 w-full'>
                    <h1 className='text-center mb-10 text-4xl'>Pourquoi <span className='text-blueLogo font-bold'>CarRental</span><span className='font-extralight'>Management</span>!</h1>
                    <div className='flex items-center justify-center gap-24'>
                        <div className='flex flex-col justify-center round-hover duration-300 cursor-pointer items-center gap-3'>
                            <div className='rounded-full hover:bg-silverGrey duration-300 w-28 h-28 bg-blueLogo flex items-center justify-center'>
                                <img src="data:image/png;base64,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" />
                            </div>
                            <h1 className='text-xl'>Maintenance</h1>
                        </div>

                        <div className='flex flex-col cursor-pointer justify-center round-hover duration-300 items-center'>
                            <div className='rounded-full hover:bg-silverGrey duration-300 w-28 h-28 bg-blueLogo flex justify-center items-center'>
                                <img src="data:image/png;base64,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" />
                            </div>
                            <h1 className='text-xl mt-4'>Simplicité</h1>
                        </div>

                        <div className='flex flex-col cursor-pointer justify-center round-hover duration-300 items-center'>
                            <div className='rounded-full hover:bg-silverGrey duration-300 w-28 h-28 .round-hover bg-blueLogo flex justify-center items-center'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEjElEQVR4nO2aW4hVZRTHd14wbQwxyQcdJxOCoEYT6jF1xoh6CcQmGx9GzYdyFN/KdMZbml3oRmQ9KeRDFzBhpoTElAi0zIYegh6aZFDKyrTykjqj/mLRf3O+OZ2zz7fP/vbpPLjgwDnfXuv/X9/+LusyE0XXZbgANwBPAd8Bg0A/0A1M1Wc9cAz4A+gDlppNVG8CvEV62R7VkwDtcuwi8CgwGpgL9ADn9LHvLcBY6ZiuSfv/6XgDsAx4Xg4OyanOFBidsjHbXmCbMBvy9b7gwGztdVeuAJuqwNokW1d+BO7Jx/sC8XhnEoeBLmAJ0JgBsxHoENaXzmTyWxngCWcSI3PAH+lMZklofJfoRZGszZFjrTheiHIksUNp0pEjR4c4evIiWKyDOZTlTHjwTHN4wl3NwAjgHedW2RgQeyKwB7izaHyzw/d2kAzAOeAWwFZkBhyOvVPYn5aJMxf1fGkIsm8FtjAz2HDc+cA1OXtHGZ02cfeFILQkz2RsZrAC5jgllSbPJujdJJ3fQ5DGAbAlM1gB8yVh2mqPTtBrld4PIUjXh7wOleIM6Wa61/O67w5BbLWEydkAWKOAo8J7xUP/vHSn5j4R5UoHgRkeWE8La8AnlyLwRLqTthbwoZ7/BDQn4MwALkj3QU/u3pBbyzJRk9Yyz28GPpOO3XBzypTB+6XzbgruFtn0Z52HgZ0R2LgEnTHAB9K7VBxzlOqb/AZMSnlNm5zOOo9IjQKTNo9U5g3pXo2rRWCyOaLxxSm520IGROt2oAhcsZQFnlHENtkKvK/ve1PydjopSvbaRPvbErdYnvNMxa0lFIs1H5pScG5xbLcHbRupUxIHsmke+g851+fqFDxNuaTxRSQ9aZYauA/4OE1ZTOFiyKewEom1f2pV6m7LiyOuElGDIO/mQ3tofJfIuoQnnMmEaAc1CcOwvhL28ZBlQzniu0Xkih3OzVVgbSnRoBsA7srH+/86cKOzMkerbJmukM2Q+mQmp5MyiOACzBPxr9pujzlBs0294VYlfRf06dVYg3T+ls0ipfdxAbeglhPZK9IuZ8wNmr7yumO/SmOHazWJZqUgFq0nFmUAls58YzW2laeqLqcADzvb6Ix0lrsRWwniKendX4uJ7BLZq1W0fRKrQmCj9HqDOJtA1KgcatA3dwJu1dmx2+l2j4bdea14fjeX7ekqiqP4Le/21H9T+jszOVvhbZ3T22r2tLGC66Qcm+9pM11n6XKQWj2hdv+kigQwbQb8nmxertrhhAAYv9m5Key+diZyzDc/A2Zq5c8CEzI5XwT8pJw5ksJmjmx+cRoYj6Sw3yebNVU7XgL0+wqBzZK98UU2H+nZBttW+n6gxEofqID9c7AKEficyrI7JtSBvaKOymS1jP6S3kwHd4cHbp81NoJMpMIkpyuSm6zT2Gv6vcPRGzYGrNRvy7lmR/UgwANaAWsDPQ78KSdnOTq3Oau0QNerHehFUT0JsE7Ox62ggyV09hTphL1eQ4iSxrjbWPKG0v+nxGIt1FFRPQr//mfEIeCLcjFDJYD9geeW2nsY1b/8AyYJ4muiGOCwAAAAAElFTkSuQmCC" />
                            </div>
                            <h1 className='text-xl mt-4'>Qualité</h1>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <h1 className='text-4xl text-center'>Voulez-vous <span className='text-blueLogo font-bold'>LOUER</span> une voiture ?!</h1>
                    <div className='flex justify-center items-center'>
                        {
                            loading ? (
                                <Loading />
                            ) : (
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 m-11'>
                                    {vehicle.map((vehicles) => (
                                        <div key={vehicles.id}>
                                            {!isAdmin && (<Card vehicleId={vehicles.id} vehicleName={vehicles.name} vehicleModel={vehicles.model} vehiclePrice={vehicles.price} vehicleAvailable={vehicles.available} showCard={true} /> )}
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Visitor
import React from 'react'
import Visitor from '../visitor/Visitor'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

const Admin = () => {
  const [newCar, setNewCar] = useState({
    name: '',
    model: '',
    matricule: '',
    price: '',
    available: true,
  });

  const [updateCar, setUpdateCar] = useState(null);
  const [deleteCarId, setDeleteCarId] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  // State to manage the visibility of the "Add New Car" form
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const [showUpdateCarForm, setShowUpdateCarForm] = useState(false);
  const [showDeleteCarForm, setShowDeleteCarForm] = useState(false);

  const handleDeleteCar = async () => {
    try {
      // Send a DELETE request to your server to delete the car
      await axios.delete(`http://localhost:8080/api/vehicle/${deleteCarId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Update the local state by filtering out the deleted car
      setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.id !== deleteCarId));
      // Reset the form and hide it
      setDeleteCarId('');
      setShowDeleteCarForm(false);
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateCar((prevCar) => (prevCar ? { ...prevCar, [name]: value } : null));
  };

  const handleUpdateCar = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/vehicle/${updateCar.id}`,
        {
          name: updateCar.name,
          model: updateCar.model,
          matricule: updateCar.matricule,
          price: updateCar.price,
          available: updateCar.available,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // Update the local state with the updated data
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) =>
          vehicle.id === updateCar.id ? response.data : vehicle
        )
      );
      // Reset the update form and hide it
      setUpdateCar(null);
      setShowUpdateCarForm(false);
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleUpdateClick = (vehicle) => {
    console.log('Update button clicked:', vehicle);
    setUpdateCar(vehicle);
    setShowUpdateCarForm(true);
  };

  const handleAddCar = async () => {
    try {
      // Send a POST request to your server to add the new car
      const response = await axios.post('http://localhost:8080/api/vehicle', newCar, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Update the local state with the new car data
      setVehicles((prevVehicles) => [...prevVehicles, response.data]);
      // Reset the form and hide it
      setNewCar({
        name: '',
        matricule: '',
        model: '',
        available: true,
        price: '',
      });
      setShowAddCarForm(false);
    } catch (error) {
      console.error('Error adding new car:', error);
    }
  };

  const handleFilter = (filterType) => {
    // Filter cars based on availability
    if (filterType === 'all') {
      setFilteredVehicles(vehicles);
    } else {
      const filteredCars = vehicles.filter((vehicle) => vehicle.available === (filterType === 'available'));
      setFilteredVehicles(filteredCars);
    }
  };

  useEffect(() => {
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
        setVehicles(response.data);
        setLoading(false);
        //initlally taybien ga3 tonobilat
        setFilteredVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <>
      <div className=''>
        <Visitor isAdmin={true} />
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-[-100px]'>
            {filteredVehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                vehicleName={vehicle.name}
                vehicleId={vehicle.id}
                vehicleModel={vehicle.model}
                vehiclePrice={vehicle.price}
                vehicleAvailable={vehicle.available}
              />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={() => setShowAddCarForm(true)} type="button" className="text-white bg-blueLogo hover:bg-silverGrey duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Ajouter Vehicule</button>
            <button onClick={() => handleUpdateClick(updateCar)} type='button' className='text-white bg-yellow-300 hover:bg-silverGrey duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Modifier Vehicule</button>
            <button onClick={() => setShowDeleteCarForm(true)} type='button' className='text-white bg-red-500 hover:bg-silverGrey duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Supprimer Vehicule</button>
          </div>
          <div className='flex justify-center items-center space-x-2'>
            <button onClick={() => handleFilter('all')} type='button' className='text-white bg-gray-700 hover:bg-gray-600 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Tous </button>
            <button onClick={() => handleFilter('available')} type='button' className='text-white bg-green-500 hover:bg-green-400 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Disponibles</button>
            <button onClick={() => handleFilter('unavailable')} type='button' className='text-white bg-red-500 hover:bg-red-400 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Non Disponibles</button>
          </div>
        </div>
      </div>

      {showAddCarForm && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-8 rounded'>
            <h2 className='text-2xl font-bold mb-4'>Add New Car</h2>
            <form>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                  Car Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={newCar.name}
                  onChange={handleInputChange}
                  className='mt-1 p-2 w-full border rounded-md'
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='model' className='block text-sm font-medium text-gray-700'>
                  Car Model
                </label>
                <input
                  type='text'
                  id='model'
                  name='model'
                  value={newCar.model}
                  onChange={handleInputChange}
                  className='mt-1 p-2 w-full border rounded-md'
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='matricule' className='block text-sm font-medium text-gray-700'>
                  Matricule
                </label>
                <input
                  type='text'
                  id='matricule'
                  name='matricule'
                  value={newCar.matricule}
                  onChange={handleInputChange}
                  className='mt-1 p-2 w-full border rounded-md'
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='price' className='block text-sm font-medium text-gray-700'>
                  Price
                </label>
                <input
                  type='text'
                  id='price'
                  name='price'
                  value={newCar.price}
                  onChange={handleInputChange}
                  className='mt-1 p-2 w-full border rounded-md'
                  autoComplete='off'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='available' className='block text-sm font-medium text-gray-700'>
                  Available
                </label>
                <select
                  id='available'
                  name='available'
                  value={newCar.available}
                  onChange={handleInputChange}
                  className='mt-1 p-2 w-full border rounded-md'
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <button type='button' onClick={handleAddCar} className='bg-blueLogo text-white rounded p-2'>
                Add Car
              </button>
            </form>

            <button onClick={() => setShowAddCarForm(false)} className='text-gray-500 mt-4'>
              Cancel
            </button>
          </div>
        </div>
      )}

      {console.log('showUpdateCarForm:', showUpdateCarForm)}



      {showUpdateCarForm && updateCar && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-8 rounded'>
            <h2 className='text-2xl font-bold mb-4'>Update Car</h2>
            <form>
              {/* Your input fields for updating a car */}
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                  Car Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={updateCar.name}
                  onChange={handleUpdateInputChange}
                  className='mt-1 p-2 w-full border rounded-md'
                  autoComplete='off'
                />
              </div>
              <button type='button' onClick={handleUpdateCar} className='bg-yellow-300 text-white rounded p-2'>
                Update Car
              </button>
            </form>

            <button onClick={() => setShowUpdateCarForm(false)} className='text-gray-500 mt-4'>
              Cancel
            </button>
          </div>
        </div>
      )}

      {showDeleteCarForm && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-white p-8 rounded'>
            <h2 className='text-2xl font-bold mb-4'>Delete Car</h2>
            <form>
              <div className='mb-4'>
                <label htmlFor='deleteCarId' className='block text-sm font-medium text-gray-700'>
                  Car ID
                </label>
                <input
                  type='text'
                  id='deleteCarId'
                  name='deleteCarId'
                  value={deleteCarId}
                  onChange={(e) => setDeleteCarId(e.target.value)}
                  className='mt-1 p-2 w-full border rounded-md'
                  autoComplete='off'
                />
              </div>

              <button type='button' onClick={handleDeleteCar} className='bg-red-500 text-white rounded p-2'>
                Delete Car
              </button>
            </form>

            <button onClick={() => setShowDeleteCarForm(false)} className='text-gray-500 mt-4'>
              Cancel
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default Admin
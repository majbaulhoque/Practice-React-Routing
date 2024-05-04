import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "FitZone Gym",
            "location": "123 Main Street",
            "prices": 150,
            "features": ["Access to Cardio Equipment", "Weightlifting Area", "Weightlifting Area", "Group Classes"]
        },
        {
            "id": 2,
            "name": "PowerHouse Fitness",
            "location": "456 Elm Street",
            "prices": 200,
            "features": ["Access to Cardio Equipment", "Weightlifting Area", "Group Classes", "Personal Training Sessions"]
        },
        {
            "id": 3,
            "name": "Flex Gym",
            "location": "789 Oak Street",
            "prices": 120,
            "features": ["Access to Strength Training Equipment", "Yoga Studio", "Spinning Classes", "Personal Training Sessions"]
        },
        {
            "id": 4,
            "name": "IronWorks Gym",
            "location": "321 Maple Avenue",
            "prices": 90,
            "features": ["Access to Cardio Machines", "Strength Training Area", "Weightlifting Area", "Group Classes"]
        },
        {
            "id": 5,
            "name": "GymRush",
            "location": "567 Pine Street",
            "prices": 100,
            "features": ["Access to Cardio Machines", "Strength Training Area", "Group Classes", "Personal Training Sessions"]
        }
    ]

    return (
        <div className="m-12  max-w-7xl mx-auto">
            <h2 className="text-5xl mb-4">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black p-2 rounded-lg">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
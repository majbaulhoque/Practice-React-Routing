import axios from 'axios';
import { useEffect, useState } from 'react';
// import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        {"name": "John", "id": 1, "math_marks": 85, "physics_marks": 75, "chemistry_marks": 80},
        {"name": "Alice", "id": 2, "math_marks": 78, "physics_marks": 70, "chemistry_marks": 85},
        {"name": "Michael", "id": 3, "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90},
        {"name": "Emily", "id": 4, "math_marks": 65, "physics_marks": 60, "chemistry_marks": 70},
        {"name": "James", "id": 5, "math_marks": 88, "physics_marks": 82, "chemistry_marks": 85},
        {"name": "Sophia", "id": 6, "math_marks": 70, "physics_marks": 65, "chemistry_marks": 75},
        {"name": "Daniel", "id": 7, "math_marks": 95, "physics_marks": 90, "chemistry_marks": 92},
        {"name": "Emma", "id": 8, "math_marks": 82, "physics_marks": 78, "chemistry_marks": 80},
        {"name": "William", "id": 9, "math_marks": 75, "physics_marks": 68, "chemistry_marks": 72},
        {"name": "Olivia", "id": 10, "math_marks": 90, "physics_marks": 85, "chemistry_marks": 88}
    ]      

    const [phones, setPhones] = useState([]);

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWidthFakeData = phoneData.map((phone) =>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWidthFakeData)
            setPhones(phonesWidthFakeData)
        })
    },[])

    return (
        <div>
            {/* <div>
                <LChart width={500} height={400} data={mathMarksData}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Line dataKey='math_marks' stroke='white'></Line>
                    <Line dataKey='physics_marks' stroke='yellow'></Line>
                    <Line dataKey='chemistry_marks' stroke='purple'></Line>
                </LChart>
            </div> */}
            <div>
                <h2 className='phones'>Phones: {phones.length}</h2>
                <BarChart width={700} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default LineChart;
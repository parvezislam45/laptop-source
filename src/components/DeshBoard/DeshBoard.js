import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DeshBoard = () => {
    const data1 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className="container">
            <div className="chart d-flex justify content-evenly">
                <div className="line">
                    <LineChart width={600} height={400} data={data1}>
                        <Line dataKey={'sell'}></Line>
                        <Line dataKey={'revenue'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis dataKey={'investment'}></YAxis>
                    </LineChart>
                </div>
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data1}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>

            </div>
            <div className="container d-flex justify content-evenly">
            <div>
                <BarChart width={400} height={400} data={data1}>
                    <Bar dataKey="investment" fill="#8884d8" />
                </BarChart>
            </div>
            <div>
                <PieChart width={600} height={600}>
                    <Pie data={data1} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data1} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
            </div>
        </div>
    );
};

export default DeshBoard;
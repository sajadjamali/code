import React from 'react';

const getData = async (url: string) => {
    try {
        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const ServerComponent = async ({ url }: { url: string }) => {
    const data = await getData(url);
    return (
        <div className='w-10/12 md:w-8/12 lg:w-6/12 mx-auto' style={{ height: '500px', overflow: 'auto' }}>
            <p>salam</p>
            {
                data?.map((d: any) => (
                    <p key={d.id}>{d.body}</p>
                ))
            }
        </div>
    )
}

export default ServerComponent;

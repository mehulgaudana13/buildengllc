import bg2 from "../../Img/bg2.png"


  const stats = [
    { name: 'Established', value: '2016' },
    { name: 'Projects', value: '200+' },
    { name: 'Regions', value: 'MN, TX, WI' },
  ]
  


  
  export default function BluidSection() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="about">
        <img
          src={bg2}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
       
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">BuildEng LLC
</h2>
<p className="mt-6 text-lg leading-8 text-gray-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-100 mt-2">{stat.name}</dt>
                  <dd className="text-4xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
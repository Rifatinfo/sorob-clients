
const imageData = [
    { id: 1, src: "https://i0.wp.com/diplomat.nyc3.digitaloceanspaces.com/credit-prothom-alo.webp?ssl=1", span: "col-span-2 row-span-2 min-h-96 md:col-start-3 md:row-start-1" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6rnBffoW-bHTGKDsC5jjiOdr0dP9IVa60kODrb4thvzGJPI9ccU0VcPyZ4k5jIctk_I&usqp=CAU" },
    { id: 3, src: "https://outspoken.newagebd.com/files/img/202409/d6fd1020338aff5a3e1721bcf3e3852d.jpg" },
    { id: 4, src: "https://media.assettype.com/outlookindia/2024-08/a39c1adf-e9b5-40e0-8c90-9719efa3eb24/WhatsApp-Image-2024-08-06-at-7.11.41-AM%20(1).jpeg?w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" },
    { id: 5, src: "https://outspoken.newagebd.com/files/img/202409/d6fd1020338aff5a3e1721bcf3e3852d.jpg" },
    { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5Xr1YXKCMdxVO4E-W2ctv0nKcwXwRXHNvg&usqp=CAU" },
    { id: 7, src: "https://outspoken.newagebd.com/files/img/202412/70d67848b13bbb188b2785af04647ca0.jpg" },
    { id: 8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5Xr1YXKCMdxVO4E-W2ctv0nKcwXwRXHNvg&usqp=CAU" },
    { id: 9, src: "https://outspoken.newagebd.com/files/img/202409/d6fd1020338aff5a3e1721bcf3e3852d.jpg" },
    { id: 10, src: "https://tvista.sgp1.digitaloceanspaces.com/news/the-iconic-moments-that-shaped-bangladeshs-july-revolution-66d6021d4756e.webP", span: "col-span-2 row-span-2 min-h-96 md:col-start-1 md:row-start-3" }
];

const Photo = () => {
    return (
        <section className="py-6  max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                {imageData.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={`Image ${image.id}`}
                        className={`w-full h-full rounded-md shadow-sm object-cover aspect-square ${image.span ? image.span : "min-h-48"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Photo;

import Link from 'next/link'
import Image from "next/image";
import classes from "../../styles/CategoryCards2.module.css"

const CategoryCards2 = ({ products, products2 }) => {
    return (
        <div className={classes.bodies}>
            {products2?.map((data) => (

                <Link href={`/components/ProductsList/${data.name}`}>
                    <div className={classes.card}>
                        <div className={classes.wrapper}>
                            <Image src={data.bg} className={classes.coverimage} height={1000} width={1050} />
                        </div>
                        <Image src={data.title} className={classes.title} height={300} width={450} />
                        <Image src={data.image} className={classes.character2} height={1000} width={1050} />
                    </div>
                </Link>
            ))}
            {products?.map((data) => (

                <Link href={`/components/ProductsList/${data.name}`}>
                    <div className={classes.card}>
                        <div className={classes.wrapper}>
                            <Image src={data.bg} className={classes.coverimage} height={1000} width={1050} />
                        </div>
                        <Image src={data.title} className={classes.title} height={300} width={450} />
                        <Image src={data.image} className={classes.character} height={1000} width={1050} />
                    </div>
                </Link>
            ))}


            {/* <Link href={`/components/ProductsList`}>
                <div className={classes.card}>
                    <div className={classes.wrapper}>
                        <Image src={`/test/sedanCar.jpg`} className={classes.coverimage} height={1000} width={1050} />
                    </div>
                    <Image src={`/test/texts/sedan.png`} className={classes.title} height={300} width={450} />
                    <Image src={`/test/sedanCarNo.png`} className={classes.character2} height={1000} width={1050} />
                </div>
            </Link>
            <Link href={`/components/ProductsList`}>
                <div className={classes.card}>
                    <div className={classes.wrapper}>
                        <Image src={`/test/suv.jpg`} className={classes.coverimage} height={1000} width={1050} />
                    </div>
                    <Image src={`/test/texts/suvv.png`} className={classes.title} height={300} width={450} />
                    <Image src={`/test/suvNo.png`} className={classes.character2} height={1000} width={1050} />
                </div>
            </Link>
            <Link href={`/components/ProductsList`}>
                <div className={classes.card}>
                    <div className={classes.wrapper}>
                        <Image src={`/test/hatch.jpg`} className={classes.coverimage} height={1000} width={1050} />
                    </div>
                    <Image src={`/test/texts/hatch.png`} className={classes.title} height={300} width={450} />
                    <Image src={`/test/hatchNo.png`} className={classes.character2} height={1000} width={1050} />
                </div>
            </Link>
            <Link href={`/components/ProductsList`}>
                <div className={classes.card}>
                    <div className={classes.wrapper}>
                        <Image src={`/test/luxuCar.jpg`} className={classes.coverimage} height={1000} width={1050} />
                    </div>
                    <Image src={`/test/texts/luxury.png`} className={classes.title} height={300} width={450} />
                    <Image src={`/test/luxuCarNo.png`} className={classes.character} height={1000} width={1050} />
                </div>
            </Link>
            <Link href={`/components/ProductsList`}>
                <div className={classes.card}>
                    <div className={classes.wrapper}>
                        <Image src={`/test/evcar.jpg`} className={classes.coverimage} height={1000} width={1050} />
                    </div>
                    <Image src={`/test/texts/ev.png`} className={classes.title} height={300} width={450} />
                    <Image src={`/test/evcarNo.png`} className={classes.character} height={1000} width={1050} />
                </div>
            </Link> */}
        </div>
    )
}

export default CategoryCards2
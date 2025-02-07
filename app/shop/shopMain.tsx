"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoHeart } from 'react-icons/go';
import { PiHandbagLight } from 'react-icons/pi';
import { PiGitDiff } from 'react-icons/pi';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Shopleftside from './shopleftside';
import { sanityClient, urlFor } from '@/lib/sanity';

interface Product {
  name: string;
  price: string;
  originalPrice: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const ShopMain = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityClient.fetch(`
        *[_type == "food"]{
          name,
          price,
          originalPrice,
          "imageSrc": image.asset->_id,
          "altText": image.alt,
          link
        }
      `);
      setProducts(fetchedProducts || []);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products available at the moment.</div>;
  }

  const selectedProducts = products.slice(3, 15);

  const repeatedProducts = [
    ...products, 
    ...Array(Math.ceil((15 - products.length) / selectedProducts.length))
      .fill(selectedProducts)
      .flat()
  ].slice(0, 15); 

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-[1560px]">
      {/* Sort and Show Section */}
      <div className="flex flex-wrap items-center space-x-4 mb-6">
        <h4 className="text-[20px] text-gray1">Sort By:</h4>
        <select className="p-2 border-2 w-[236px] h-[46px] text-gray4 bg-myWhite rounded-md">
          <option value="newest">Newest</option>
        </select>
        <h4 className="text-[20px] text-gray1 ml-4">Show:</h4>
        <select className="p-2 border-2 w-[236px] h-[46px] text-gray4 bg-myWhite rounded-md">
          <option value="default">Default</option>
        </select>
      </div>

      {/* Shop Items Section */}
      <div className="flex flex-wrap items-start justify-start gap-4">
        <div className="w-full sm:w-[984px]">
          <div className="container py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {repeatedProducts.map((item, i) => (
                <Link key={i} href={item.link || "#"}> 
                  <div className="relative group w-full h-auto border-[1px] border-myWhite">
                    {/* Image Wrapper */}
                    <div className="relative w-[312px] h-[267px] overflow-hidden">
                      <Image
                        alt={item.altText || 'Product Image'}
                        className="w-full h-full object-cover"
                        src={urlFor(item.imageSrc).url() || '/placeholder.jpg'} // Handle undefined image URL
                        width={312}
                        height={267}
                      />
                      {/* Hover Icons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-myWhite text-primaryYellow rounded-sm hover:bg-primaryYellow hover:text-myWhite transition">
                          <PiGitDiff className="text-xl" />
                        </button>
                        <Link href="../adtocart"> <button className="p-2 bg-myWhite text-primaryYellow rounded-sm hover:bg-primaryYellow hover:text-myWhite transition">
                          <PiHandbagLight className="text-xl" />
                        </button> </Link>
                        <button className="p-2 bg-myWhite text-primaryYellow rounded-sm hover:bg-primaryYellow hover:text-myWhite transition">
                          <GoHeart className="text-xl" />
                        </button>
                      </div>
                    </div>

                    {/* Text Section */}
                    <div>
                      <p className="text-black1 text-[18px] font-bold mt-2">
                        {item.name}
                      </p>
                      <div className="flex">
                        <p className="text-primaryYellow text-[16px] mt-2">
                          ${item.price}
                        </p>
                        <p className="text-gray3 line-through text-[16px] ml-3 mt-2">
                          ${item.originalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Pagination Section */}
          <div className="flex flex-row items-center justify-center gap-2 mt-6">
            <div className="relative bg-myWhite w-[50px] h-[50px] border-2 border-gray4 border-opacity-30 hover:bg-primaryYellow flex items-center justify-center">
              <MdKeyboardDoubleArrowLeft className="text-primaryYellow hover:text-myWhite text-[20px]" />
            </div>
            <div className="relative bg-myWhite w-[50px] h-[50px] border-2 border-gray4 border-opacity-30 hover:bg-primaryYellow flex items-center justify-center">
            <p className="text-primaryYellow hover:text-myWhite text-[20px]">1</p>
            
            </div>
            <div className="relative bg-myWhite w-[50px] h-[50px] border-2 border-gray4 border-opacity-30 hover:bg-primaryYellow flex items-center justify-center">
              <MdKeyboardDoubleArrowRight className="text-primaryYellow hover:text-myWhite text-[20px]" />
            </div>
          </div>
        </div>

        {/* Left Side content */}
        <Shopleftside />
      </div>
    </div>
  );
};

export default ShopMain;

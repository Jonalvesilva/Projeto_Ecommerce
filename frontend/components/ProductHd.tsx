import { FormEvent, useEffect, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";

type Props = {
  product: any;
};

export default function ProductHd(props: Props) {
  const { product } = props;

  const obj: any = {
    clothing: {
      option: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "XXL", inStock: true },
        { name: "XXXL", inStock: false },
      ],
    },
    electronics: {
      option: [
        { name: "Brazil", inStock: true },
        { name: "EUA", inStock: true },
        { name: "Europe", inStock: true },
      ],
    },
    cosmetics: {
      option: [
        { name: "China", inStock: true },
        { name: "Brazil", inStock: true },
        { name: "India", inStock: true },
        { name: "Eua", inStock: true },
      ],
    },
  };

  const colors = [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedSize, setSelectedSize] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [review, setReview] = useState(
    Math.floor(Math.random() * (200 - 5)) + 5
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    setIsMounted(true);
    setSelectedSize(obj[product.category].option[0].name);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="inset-0 w-[90%] max-w-screen-md mx-auto overflow-y-auto">
      <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div className="relative flex w-full items-center overflow-hidden bg-white rounded-xl px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="h-full overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={product.image.src}
                alt={product.imageAlt}
                className="object-contain object-center h-full mx-auto"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-xl font-bold text-gray-900 sm:pr-12 text-justify">
                {product.name}
              </h2>

              <section className="mt-4">
                <div className="flex gap-x-8">
                  <p className="text-2xl text-orange-500 line-through">
                    R$: {product.old_price},00
                  </p>
                  <p className="text-2xl text-gray-900">
                    R$: {product.new_price},00
                  </p>
                </div>
                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            rating > 3 ? "text-gray-300" : "text-yellow-400",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {review} reviews
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-10">
                <form onSubmit={onSubmit}>
                  {/* Colors */}
                  <fieldset>
                    <legend className="text-md text-start font-medium text-gray-900">
                      Color
                    </legend>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4 flex items-center space-x-3"
                    >
                      {colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color.name}
                          aria-label={color.name}
                          className={({ focus, checked }) =>
                            classNames(
                              color.selectedClass,
                              focus && checked ? "ring ring-offset-1" : "",
                              !focus && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>

                  {/* Sizes */}
                  <fieldset className="mt-10" aria-label="Choose a size">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">
                        Opção
                      </div>
                      <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Guia de Tamanho
                      </p>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4 grid grid-cols-3 md:grid-cols-4 gap-4 w-full"
                    >
                      {obj[product.category].option.map((item: any) => (
                        <Radio
                          key={item.name}
                          value={item.name}
                          disabled={!item.inStock}
                          className={({ focus }) =>
                            classNames(
                              item.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",

                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                            )
                          }
                        >
                          {({ checked, focus }) => (
                            <>
                              <span>{item.name}</span>
                              {item.inStock ? (
                                <span
                                  className={classNames(
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    focus ? "border" : "border-2",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>

                  <button className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Adicionar ao Carrinho
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

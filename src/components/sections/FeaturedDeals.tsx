"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { FEATURED_DEALS } from "@/data/products";
import { formatINR } from "@/lib/utils";
import { Flame, ShoppingCart, Star, Check, Sparkles, Tag } from "lucide-react";

export const FeaturedDeals: React.FC = () => {
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (id: string) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section id="deals" className="py-24 sm:py-32 bg-gradient-to-b from-[#FA4C00] via-[#E84400] to-[#FA4C00] text-white relative overflow-hidden shadow-2xl">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFBD59]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/15 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Header with Floating Limited Time Offer Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14" data-reveal="fade-up">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider mb-3 backdrop-blur-md shadow-sm">
              <Flame className="w-4 h-4 fill-white animate-bounce" /> Super Saver Deals
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
              Featured Deals
            </h2>
            <p className="text-sm sm:text-base text-white/90 mt-2 font-medium">
              Unbeatable discounts on trending electronics, fashion, and home appliances.
            </p>
          </div>

          {/* Floating Limited Time Offer Card */}
          <div className="animate-float">
            <div className="flex items-center gap-4 px-6 py-4 rounded-3xl bg-black/25 border border-white/25 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.25)] hover:bg-black/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFBD59] to-[#FA4C00] flex items-center justify-center text-black shadow-md shrink-0">
                <Tag className="w-6 h-6 fill-black text-black" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#FFBD59]">
                    SPECIAL PROMO
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <p className="text-lg font-black font-heading text-white leading-tight mt-0.5">
                  Limited Time Offer
                </p>
                <p className="text-xs text-white/80 font-medium">
                  Up to 50% OFF • While Stocks Last
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Crisp White Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_DEALS.map((deal, index) => {
            const delays = [100, 200, 300, 400] as const;
            const isAdded = addedItems[deal.id];

            return (
              <AnimatedCard
                key={deal.id}
                delay={delays[index]}
                className="group relative rounded-3xl bg-[#FFFFFF] text-[#111111] p-5 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300 border border-white/40"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FA4C00] text-white font-extrabold text-xs tracking-wider shadow-sm">
                      {deal.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#FA4C00] bg-[#FAF4E6] px-2.5 py-0.5 rounded-md border border-[#E8DFC9]">
                      {deal.tag}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F7F7F7] border border-black/[0.04] mb-5 flex items-center justify-center group-hover:border-[#FA4C00]/30 transition-all">
                    <Image
                      src={deal.image}
                      alt={`${deal.name} (${deal.category})`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-4 group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  {/* Rating & Category */}
                  <div className="flex items-center justify-between text-xs text-[#666666] mb-2 font-medium">
                    <span>{deal.category}</span>
                    <div className="flex items-center gap-1 text-[#FA4C00] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#FA4C00]" />
                      <span>{deal.rating}</span>
                      <span className="text-[#888888]">({deal.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-base font-bold text-[#111111] font-heading group-hover:text-[#FA4C00] transition-colors line-clamp-1 mb-3">
                    {deal.name}
                  </h3>

                  {/* Price Section */}
                  <div className="flex items-baseline gap-2.5 mb-6">
                    <span className="text-2xl font-black font-heading text-[#111111]">
                      {formatINR(deal.currentPrice)}
                    </span>
                    <span className="text-sm text-[#888888] line-through font-medium">
                      {formatINR(deal.oldPrice)}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 ml-auto bg-emerald-50 px-2 py-0.5 rounded">
                      Save {formatINR(deal.oldPrice - deal.currentPrice)}
                    </span>
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(deal.id)}
                  className="w-full py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 bg-[#FA4C00] hover:bg-[#E04400] text-white shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" /> Claim Deal
                    </>
                  )}
                </button>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

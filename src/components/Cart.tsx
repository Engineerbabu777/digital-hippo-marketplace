'use client'

import React from 'react'
import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

import Link from 'next/link';
import Image from 'next/image';

import { formatPrice } from '@/lib/utils'
type Props = {}

export default function Cart ({}: Props) {
  const itemCart = 0
  const fee = 1

  return (
    <>
      <Sheet>
        <SheetTrigger className='group -m-2 flex items-center p-2'>
          <ShoppingCart
            className={
              'h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            }
          />
          <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
            0
          </span>
        </SheetTrigger>

        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
          <SheetHeader className='space-y-2.5 pr-6'>
            <SheetTitle>Cart (0)</SheetTitle>
          </SheetHeader>

          {itemCart > 0 ? (
            <>
              <div className='flex w-full flex-col pr-6'>
                Cart Item
                {/* TODO! */}
              </div>
              <div className='space-y-4 pr-6'>
                <Separator />
                <div className='space-y-1.5 pr-5'>
                  <div className='flex'>
                    <span className='flex-1'>Shipping</span>
                    <span className='flex-1'>Free</span>
                  </div>
                  <div className='flex'>
                    <span className='flex-1'>Transaction Fee</span>
                    <span className='flex-1'>{formatPrice(fee)}</span>
                  </div>
                </div>

                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href='/cart'
                      className={buttonVariants({
                        className: 'w-full'
                      })}
                    ></Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div className="relative mb-4 h-60 w-60 text-muted-foreground" aria-hidden>
                <Image src={"/hippo-empty-cart.png"} alt="text" fill />
              </div>
            </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}

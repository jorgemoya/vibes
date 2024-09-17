'use client'

import Draggable from '@/components/ui/draggable'
import { Sticker } from '@/components/ui/sticker'
import Transition from '@/components/ui/transition'
import { Vibes1Back, Vibes1Front, Vibes1Shadow } from '@/icons/generated'

export function Vibes1() {
  return (
    <div className="absolute bottom-5 left-1/2 translate-x-[570px]">
      <Draggable>
        {({ active, hover }) => (
          <Transition
            className="transition-transform duration-1000"
            from="translate-x-[-700px] translate-y-[250px] rotate-45"
            to="translate-x-0 translate-y-0 rotate-[4deg]"
          >
            <Sticker
              active={active}
              hover={hover}
              peelAngle={0}
              width={129}
              height={69}
              front={<Vibes1Front />}
              back={<Vibes1Back />}
              shadow={<Vibes1Shadow />}
            />
          </Transition>
        )}
      </Draggable>
    </div>
  )
}

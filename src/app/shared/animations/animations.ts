import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':leave', [
    animate(
      '300ms ease-in',
      keyframes([
        style({
          opacity: 1,
        }),
        style({
          opacity: 0,
        }),
      ])
    ),
  ]),
  transition(':enter', [
    animate(
      '700ms ease-in',
      keyframes([
        style({
          opacity: 0,
        }),
        style({
          opacity: 1,
        }),
      ])
    ),
  ]),
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          display: 'block',
          transform: 'translateX(-100%)'
        }),
        stagger(100, [
          animate(
            '800ms ease-out',
            keyframes([
              style({
                opacity: 0.2,
                  transform: 'translateX(15%)',
                offset: 0.6,
              }),
              style({
                opacity: 1,
                  transform: 'translateX(0)',
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
    // query(
    //   ':leave',
    //   [
    //     style({
    //       opacity: 1,
    //       // transform: 'translateX(-100%)'
    //     }),
    //     stagger(300, [
    //       animate(
    //         '400ms ease-out',
    //         keyframes([
    //           style({
    //             opacity: 0.5,
    //             // transform: 'translateX(15%)',
    //             offset: 0.4,
    //           }),
    //           style({
    //             opacity: 0,
    //             // transform: 'translateX(0)',
    //             offset: 1,
    //           }),
    //         ])
    //       ),
    //     ]),
    //   ],
    //   { optional: true }
    // ),
  ]),
]);

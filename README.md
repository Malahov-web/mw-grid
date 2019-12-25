# mw-grid
Powerfull and lightweight CSS layout framework for creating your layout like 'container/row/column' support block, inline-block and flexbox models.

# Example

```scss

// Options:
$columns: 12;
$columns_gap: 15;
$container_width: 1400;
$breakpoints_between: 'responsive'; // 'responsive' || 'fixed'

$modules_display: ( 
    block: 1,
    inline-block: 0,
    flex: 1
);

$devices: ( 
    mv_: (
        breakpoint: 320,
        container_max: 300,
        font_base: 15px,
        ms_coeff: 1.10,
    ),
    tb_: (
        breakpoint: 768,
        container_max: 750,
        font_base: 15px,
        ms_coeff: 1.17,
    ), 
    ds_: (
        breakpoint: 1024,
        container_max: 960,
        font_base: 15px,
        ms_coeff: 1.17
    )     
);

```

# Installation

Clone the repo: 
```bash
git clone git@github.com:Malahov-web/mw-grid.git
```

Install with [npm](https://nodejs.org/en/): 
```bash
$ npm install mw-grid
```

# mw-grid
Powerfull and lightweight CSS layout framework for creating your layout like 'container/row/column' support block, inline-block and flexbox models.

## Example

Your scss:
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

// Import module
@import 'node_modules/mw-grid/src/_mwgrid.scss';
```

## Installation

Clone the repo: 
```bash
git clone git@github.com:Malahov-web/mw-grid.git
```

Install with [npm](https://nodejs.org/en/): 
```bash
$ npm install mw-grid
```

## Usage 
### HTML code - CSS-classes
Standart structure classes `.section`, `.container`, `.row`, and columns like `.mv_` or `[class*="ds_"]`

Your html:
```html

<section class="section">
    <div class="container">
        <div class="news row">
            
            <div class="mv_12 tb_6 ds_4 news__item-outer">
                <div class="news__item row-flex middle">
                    <div class="news__item-header mv_12 ds_5">
                        <div class="news__item-year">
                            2019
                        </div>
                        <div class="news__item-title">
                            Getting ready to meet Christmas!
                        </div>
                    </div>
                    <div class="news__item-content mv_12 ds_7">
                        <div class="news__item-text centered tb_lefted">
                            Getting ready to meet Christmas is an EP by Las Vegas rock group , released in March 2019 in the United States.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
```

### CCS code (SCSS API)
You have an SCSS API that allows you to quickly configure all the grid parameters
See [Example](#example)

### SCSS Utilites
You also have some utilites (SCSS functions) to help you work with the settings.
```scss
.your-special-block {
    font-size: get_grid_f_b('ds_');

    @media (min-width: get_grid_bp('ds_')+px ) {  
    
        max-width: 1/2 * get_grid_c_m('hd_')+px;
    }
}  
```
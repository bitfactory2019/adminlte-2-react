# adminlte-react
Yet another project based on the great [AdminLTE](https://adminlte.io/) Control Panel Template. This is not because of a not invented here syndrom but because the other projects seem not very active or did not meet the expectations I had in using such a react component. The philosophy for this project was to make it as easy as possible to use from a developer standpoint and rework it where I've seen the use to. Currently it does still depend on jQuery here and there (especially the DataTables Component).

## Installation

`npm i adminlte-react`


## Components

### General UI Type/Coloring options
Several components have a property `type` or `color` that allows the usage of the following values to give different accents to the component

### Types and Colors

| Type | Color | ColorCode |
| ---- | ----- | --------- |
| `default` | `gray` | `#d2d6de` |
| `primary` | `light-blue` | `#3c8dbc` |
| `info` | `aqua` | `#00c0ef` |
| `success` | `green` | `#00a65a` |
| `warning` | `yellow` | `#f39c12` |
| `danger` | `red` | `#f56954` |

### Additional Colors

In addition there are several colors available without a corresponding type
| Color |
| ----- |
| `navy` | 
| `teal` | 
| `purple` | 
| `orange` | 
| `maroon` | 
| `black` | 

### Icons

AdminLTE makes use of font-awesome icons and ionicons. Since we wanted to stay up to date, we migrated font awesome to version 5.x. Therefore the syntax for icons is no longer `fa-icon` but instead `far/fas/fab-icon`. All available icons can be found on the respective websites ([font-awesome](https://fontawesome.com/icons?d=gallery), [ionicons](https://ionicons.com/))


### AdminLTE

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| children | node |  | NavbarMenu, Sidebar and Content Components belong here |
| title | oneOf: `string`, `[string]` | `['Admin', 'LTE']` | Title in header bar, if an array is supplied the first element will be rendered bold and the second normal |
| titleShort | oneOf: `string`, `[string]` | `['Admin', 'LTE']` | Title in header bar when the sidebar is collapsed, if an array is supplied the first element will be rendered bold and the second normal |
| titleShort | oneOf: `'black-light'`, `'black'`, `'blue'`, `'blue-light'`, `'green'`, `'green-light'`, `'purple'`, `'purple-light'`, `'red'`, `'red-light'`, `'yellow'`, `'yellow-light'` | `'blue'` | Colortheme for AdminLTE |
| browserTitle | string | Untitled | Browsertitle, can be set here globally or for each site indvidually |
| sidebar | arrayOf: `<Item />`, `<Header />`, `<li />`|  | Sidebar items |

#### Sidebar.Item

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| **text** | string |  | Display text of the item |
| children | `<Item />` |  | A nested `Item` will be displayed as a sublevel item and allows for multilevel menus |
| icon | oneOf: `string`, `[string]` | `'far-circle'` | Icon on the left side |
| link | string | `'#'` | Relative links should refere to anonther page components `path` property and absolute links are simple |
| labels | arrayOf: `{small: boolean, color: string, text: string, type:string}`|  | Description for one or more labels |
| color | `string` |  | Iconcolor |
| isSubItem | `boolean` |  | True if its a nested sidebar item, will be set automatically |

#### Header

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| **text** | string |  | Display text of the item |

### Navbar

#### Menu

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| additionalMenus | node |  | Display text of the item |

#### MenuEntry

#### SimpleItem

#### TaskItem

#### Item

### Content

#### Box

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| title | `string` |  | Boxtitle |
| collapsable | `boolean` | `false` | Toggles the possibility to minimize |
| closable | `boolean` | `false` | Toggles the possibility to close a box |
| header | `node` |  | Content to be rendered in the header position of the box |
| footer | `node` |  | Content to be rendered in the footer position of the box |
| type | [type](#types-and-colors) |  | Box accent |
| options | `node` |  | Icon with options placed next to the close, collapse icons |
| icon | [icon](#icons) |  | Boxicon |
| titleRight | `boolean` | `false` | Right align box title |
| loaded | `boolean` | `true` | Loading spinner for ajax content |
| noPadding | `boolean` | `false` | Removes box padding for tighter fitting |
| badge | [Badge](#badge), arrayOf: [Badge](#badge) |  | Badge(s) placed in header |
| toolIcon | [icon](#icons) | `wrench` | Custom icon for tools menu |
| customOptions | `node` |  | Options for tool menu in header |
| className | `string` |  |  |
| footerClass | `string` |  | custom `className` for the footer region |
| collapsed | `boolean` | `false` | Initial collapsed state |
| solid | `boolean` | `false` | Solid box styling option |
| textCenter | `boolean` | `false` | Centered text styling in body |
| padding | `boolean` | `false` | Additional body padding |
| bodyClassName | `string` |  | custom `className` for the body region |
| border | `boolean` | `false` | Visible border around box |
| style | `style` | null | Inline style info for the box |
| children | `node` |  | Box content rendered in body |

#### Col

react-bootstrap `Col` component

#### Row

react-bootstrap `Row` component

#### Alert

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| closable | `boolean` | `false` | Make alert closable |
| type | [type](#types-and-colors) |  | Alert acent |
| icon | [icon](#icons) |  | Icon display left to text |
| title | `string` |  | Alert title |
| children | `node` |  | Alert content |

#### Badge

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| color | [color](#types-and-colors) |  | Badge color |
| text | `string` |  | Badge text |

#### Button

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| id | `string` |  | Button id |
| size | oneOf: `'xs'`, `'sm'`, `'md'`, `'lg'` |  | Button size |
| type | [type](#types-and-colors) | `default` | Button accent |
| block | `boolean` |  | Display as block |
| icon | [icon](#icons) |  | Button icon |
| color | [color](#types-and-colors) |  | Button color can be used instead of type |
| classes | `string` |  | Button additional button classes |
| flat | `boolean` | `false` | Flat button styling |
| text | `string` |  | Button text |
| pullRight | `boolean` | `false` | Pull button right |
| pullLeft | `boolean` | `false` | Pull button left |
| disabled | `boolean` | `false` | Disable button |
| margin | `boolean` | `false` | Additional margin around button |
| to | `string` | `false` | Button link, relative uri's should be valid router routes |
| app | `boolean` | `false` | App button styling |
| badge | [Badge](#badge), arrayOf: [Badge](#badge) |  | Badge placed in button |
| onClick | `function` |  | On click action |
| split | `boolean` | `false` | Split button and submenu |
| children | `node` |  | Button submenu entries |

#### ButtonGroup

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| pullRight | `boolean` | `false` | Pull button group right |
| margin | `boolean` | `false` | Additional margin around button group |
| vertical | `boolean` | `false` | Vertical align button group |
| children | `<Button />` |  | Button rendered in group |

#### Calendar

**_Work in progress_**

jQuery full calendar component

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|

#### Callout

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| type | [type](#types-and-colors) |  | Callout accent |
| title | `string` |  | Callout title |
| children | `node` |  | Callout content |

#### Chatbox - **_Work in progress_**

Undocumented use at your own risk

#### Checkbox

#### SimpleTable

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| data | `array` |  | Array of objects matching the column description |
| columns | `array` |  | Column descriptions, see [next table](#column-options) for reference |
| condensed | `bool` | `false` | Compact data layout |
| striped | `bool` | `false` | Alternate row coloring |
| noMargin | `bool` | `false` | Removes table margin |
| border | `bool` |  `false`| Show borders around cells |
| responsive | `bool` | `false` | Resize table of window resize |
| hover | `bool` | `false` | Highlight hovered rows |

##### Column Options

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| title | `string` |  | Column title |
| data | `string` |  | Data property containing the data to be rendered in the column |
| width | `string` |  | Use this prop to give the column a fixed width |
| render | `function` |  | Custom render function for the column with arguments `(data, rowData, rowIndex)` |

#### DataTable

##### Props

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| options | `object` |  | Array of objects matching the column description |
| ajaxMap | `function` |  | Allows custom argument mapping for ajax based data source, equivalent to `on('preXhr.dt')` |
| ajaxResponseMap | `function` |  | Mapping function for data retrieved on ajax based data source, equivalent to `on('preXhr.dt')` |
| data | `array` |  | Array of objects matching the column description |
| columns | `array` |  | Column descriptions, see [next table](#column-options) for reference |
| setDataTableRef | `function` |  | Callback that gets passed the datatable api() ref |
| onSelect | `function` |  | Callback after row gets selected - arguments `(rowdata)` |
| onDeselect | `function` |  | Callback after row deselect - arguments `(rowdata)` |
| footer | `bool` | `false` | Renders column headers on bottom of table |
| hover | `bool` | `false` | Highlight hovered rows |
| border | `bool` | `false` | Show borders around cells |
| condensed | `bool` | `false` | Compact data layout |
| striped | `bool` | `false` | Alternate row coloring |
| noMargin | `bool` | `false` | Removes table margin |
| responsive | `bool` | `false` | Resize table of window resize |
| selectedRows | `[object]` |  | Allows passing in the currently selected rows |
| onClickEvents | `object` |  | Row level bound click events based on `class` on cell dom element. Example `render: (data) => ``<div class="on-click-event">${data}</div>``'` will bind to an object `{onClickEvent: (data, rowIndex, rowData) => {console.log("do stuff with row data")}}` |

#### Description

Simple wrapper over `<dl>`

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| horizontal | `bool` | `false` | Will render the list horizontal |

#### DescriptionItem

| Name    | Type    | Default | Description |
| --------|---------|---------|-------------|
| horizontal | `bool` | `false` | Will render the list horizontal |

#### DescriptionBlock

#### Divider

#### Infobox

#### Infobox2

#### Label

#### LoadingOverlay

#### LoginCore

#### Margin

#### Memberbox

#### NavList

#### NavListItem

#### Pagination

#### ProductList

#### ProductListItem

#### ProgressBar

#### ProgressGroup

#### Sparkbar

#### SparklineBox

#### Tabs

#### TabContent

### Forms

#### Text
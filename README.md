# <MultiSelect>

For this project, I created a reusable multi-select input component.

## Running the demo

1. Clone the repository
2. Run `yarn`
3. Run `yarn start`

This should launch the demo in your browser. You can also go to http://localhost:3000 to view it.'

## API

To use the component in your project:

1. Copy the `src/multi-select` directory into your project
2. Add this line to the component that will include the multi-select:
  ```
  import MultiSelect from 'multi-select';
  ```
3. Add the following lines to your component's return:
  ```
  <MultiSelect
    data={data}
    fieldName='students_and_groups'
    label='Select Students and Groups'
  />
  ```

### fieldName

`fieldName` is a required string. It is the value you would typically put in the `name` attribute of an input tag.

### label

`label` is a required string. It will be used as the label for the multi-select component.

### data

`data` is a required object. It must be in the following format:

```
{
  "students": [ // This will be capitalized when displayed
    {
      "id": "1510905", // "id" is required
      "name": "Hayleigh Edwards", // Each object must have "name" or "title"
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png" // "avatar_attachment_id" is an optional image URL
    },
    {
      "id": "1882243",
      "name": "Pema Edwards",
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png"
    }
  ],
  "groups": [
    {
      "id": "43875",
      "title": "Project Group 1"
    },
    {
      "id": "43876",
      "title": "Project Group 2"
    }
  ]
}
```

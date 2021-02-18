import { extend, configure } from 'vee-validate'
import { required, email, min, max, alpha } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)
extend('alpha', alpha)

export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values),
  })
}

// extend('required', {
//   ...required,
//   message: '{_field_} can not be empty'
// })

// extend('alpha', {
//   ...alpha,
//   message: '{_field_} must only contain alphabetic characters'
// })

// extend('min', {
//   ...min,
//   message: '{_field_} may not be minor than {length} characters'
// })

// extend('max', {
//   ...max,
//   message: '{_field_} may not be greater than {length} characters'
// })

// extend('email', {
//   ...email,
//   message: 'Email must be valid'
// })

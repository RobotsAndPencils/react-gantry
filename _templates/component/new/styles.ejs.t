---
to: src/components/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.scss
---

.<%= h.inflection.camelize(name, true) %>Wrapper {
  text-align: center;
}
---
to: src/containers/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-container.scss
---

.<%= h.inflection.camelize(name, true) %>Wrapper {
  text-align: center;
}
var chai = require('chai');
var expect = chai.expect;
const spies = require('chai-spies');
const { db, Page } = require('../models');
chai.use(spies);


describe('Page model', function () {

  beforeEach(() => {
    let validPage = Page.build({
      title: 'How To Sequelize',
      content: "Lots of cool content!",
      status: 'close',
      tags: 'code, software, databases, ORM'
    });

    let invalidPage;
  })

  describe('Attribute Validations', () => {
    describe('title', () => {

      beforeEach(() => {
        invalidPage = Page.build({
          title: null,
          content: "Lots of cool content!",
          status: 'close',
          tags: 'code, software, databases, ORM'
        })
      })
      xit('does not accept null for title', () => {
        invalidPage.validate()
          .then({})
          .catch((err) => {
            expect(err.errors[0].message).to.equal('title cannot be null');
          });
      })

    })

    describe('Page.content', () => {
      beforeEach(() => {
        invalidPage = Page.build({
          title: 'Super cool page',
          content: null,
          status: 'close',
          tags: 'code, software, databases, ORM'
        })
      })
      it('does not accept null for content')

    })
    describe('Page.status', () => {
      beforeEach(() => {
        invalidPage = Page.build({
          title: "I'm a real title",
          content: "Lots of cool content!",
          status: 'ajar',
          tags: 'code, software, databases, ORM'
        })
      })
      xit('only take a status of "open" or "closed"')

    })

    describe('Page.tags', () => {
      beforeEach(() => {
        invalidPage = Page.build({
          title: "Derp",
          content: "Lots of cool content!",
          status: 'close',
          tags: () => {return "I'm a function!"}
        })
      })
      xit('throws error if not given a string or array of strings')

      describe('tag.set()', () => {
        it('converts input to array')
        it('splits strings at ","')
        it('trims extra whitespace from individual tags')
        it('if given an array, it assigns it to tags')


      })
    })
  })

  describe('virtual', () => {

    describe('Page.route', () => {
      xit('returns the Page.urlTitle with "/wiki/" prepended')
    })

    describe('Page.renderedContent', () => {
      xit('converts markdown content to html')
    })

  })

  describe('hooks', () => {
    describe('beforeValidate function', () => {
      xit ('it constructs a url string from the page.title, replacing spaces and punctuation with underscore')
    })
  })

  describe('Instance methods', () => {
    describe('Page.findSimilar', () => {
      xit ('returns all pages that share any tags found in "this" page, excluding itself')
    })
  })

  describe('Class Methods', () => {
    describe('Page.findByTag', () => {
      xit ('returns all pages that have the passed-in tag string in their tags array')
    })
  })




})

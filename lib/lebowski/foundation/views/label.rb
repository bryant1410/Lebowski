# ==========================================================================
# Project:   Lebowski Framework - The SproutCore Test Automation Framework
# License:   Licensed under MIT license (see License.txt)
# ==========================================================================

module Lebowski
  module Foundation
    module Views
      
      #
      # Represents a proxy to a SproutCore label view (SC.LabelView)
      #
      class LabelView < Lebowski::Foundation::Views::View
        include Lebowski::Foundation::Mixins::InlineTextFieldSupport 
        
        representing_sc_class 'SC.LabelView'
        
        def edit(value)
          return if (not self['isEditable'])
          
          double_click
          edit_inline_text_field value
          click
          
          # Need to incoporate an intentional sleep so sproutcore
          # has enough time to do its thing
          sleep 0.2
        end
    
      end
      
    end
  end
end
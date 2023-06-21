
module ApiConventionsHelper
  extend ActiveSupport::Concern

  class HashTransformer
    def deep_transform_keys(hash, &block)
      result = {}
      hash.each do |k, v|
        result[yield(k)] = value.is_a?(Hash) ? deep_transform_keys(v, &block) : v
      end
      result
    end

    def snakecase_keys(hash)
      deep_transform_keys(hash) { |k| k.to_s.underscore.to_sym }
    end

    def camelize_keys(hash)
      deep_transform_keys(hash) { |k| k.to_s.camelize(:lower) }
    end
  end

  def snakecase_params
    HashTransformer.new.snakecase_keys(params)
  end

  def camelize(hash)
    HashTransformer.new.camelize_keys(hash)
  end
end